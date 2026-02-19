const dataFiles = {
  projects: "../data/projects.csv",
  quality: "../data/quality.csv",
  clarifications: "../data/clarifications.csv",
  risks: "../data/risks.csv",
};

function parseCSV(text) {
  const rows = [];
  let row = [];
  let value = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        value += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      row.push(value.trim());
      value = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      if (value.length || row.length) {
        row.push(value.trim());
        rows.push(row);
      }
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  if (value.length || row.length) {
    row.push(value.trim());
    rows.push(row);
  }

  const [headers, ...records] = rows;
  return records.map((record) =>
    headers.reduce((acc, header, idx) => {
      acc[header] = record[idx] ?? "";
      return acc;
    }, {})
  );
}

async function loadData(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Failed loading ${path}`);
  return parseCSV(await response.text());
}

function formatPct(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function drawBarChart(canvasId, labels, values, color) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  const max = Math.max(...values, 1);

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#1f2937";
  ctx.font = "12px Inter, Arial";

  const left = 36;
  const bottom = 30;
  const chartW = w - left - 16;
  const chartH = h - bottom - 16;
  const gap = 12;
  const barW = (chartW - gap * (values.length - 1)) / values.length;

  values.forEach((v, i) => {
    const x = left + i * (barW + gap);
    const barH = (v / max) * chartH;
    const y = 8 + (chartH - barH);

    ctx.fillStyle = color;
    ctx.fillRect(x, y, barW, barH);

    ctx.fillStyle = "#111827";
    ctx.fillText(String(v), x + 3, y - 4);
    ctx.fillStyle = "#374151";
    ctx.fillText(labels[i], x, h - 10);
  });
}

function daysBetween(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  return (endDate - startDate) / (1000 * 60 * 60 * 24);
}

function summarizeBy(rows, key) {
  return rows.reduce((acc, row) => {
    const value = row[key] || "Unknown";
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function computeKpis(projects, quality, clarifications, risks) {
  const delivered = projects.filter((p) => p.delivered_date);
  const deliveredOnTime = delivered.filter(
    (p) => new Date(p.delivered_date) <= new Date(p.due_date)
  );
  const otd = delivered.length ? deliveredOnTime.length / delivered.length : 0;

  const tatValues = delivered
    .filter((p) => p.start_date)
    .map((p) => daysBetween(p.start_date, p.delivered_date));
  const avgTat = tatValues.length
    ? tatValues.reduce((sum, v) => sum + v, 0) / tatValues.length
    : 0;

  const passCount = quality.filter((q) => q.pass_fail === "Pass").length;
  const qaRate = quality.length ? passCount / quality.length : 0;

  const openRisks = risks.filter((r) => r.status.toLowerCase() === "open").length;
  const totalWords = projects.reduce((sum, p) => sum + Number(p.wordcount || 0), 0);
  const clarPer1k = totalWords ? (clarifications.length / totalWords) * 1000 : 0;

  return {
    otd: formatPct(otd),
    avgTat: avgTat.toFixed(1),
    qaRate: formatPct(qaRate),
    openRisks: String(openRisks),
    clarPer1k: clarPer1k.toFixed(2),
  };
}

function renderKpis(kpis) {
  document.getElementById("kpi-otd").textContent = kpis.otd;
  document.getElementById("kpi-tat").textContent = kpis.avgTat;
  document.getElementById("kpi-qa").textContent = kpis.qaRate;
  document.getElementById("kpi-risks").textContent = kpis.openRisks;
  document.getElementById("kpi-clar").textContent = kpis.clarPer1k;
}

async function main() {
  try {
    const [projects, quality, clarifications, risks] = await Promise.all([
      loadData(dataFiles.projects),
      loadData(dataFiles.quality),
      loadData(dataFiles.clarifications),
      loadData(dataFiles.risks),
    ]);

    renderKpis(computeKpis(projects, quality, clarifications, risks));

    const statusCounts = summarizeBy(projects, "status");
    drawBarChart("status-chart", Object.keys(statusCounts), Object.values(statusCounts), "#2563eb");

    const qaCounts = summarizeBy(quality, "pass_fail");
    drawBarChart("qa-chart", Object.keys(qaCounts), Object.values(qaCounts), "#059669");

    const clarCounts = summarizeBy(clarifications, "type");
    drawBarChart("clar-chart", Object.keys(clarCounts), Object.values(clarCounts), "#0891b2");
  } catch (error) {
    console.error(error);
    document.body.insertAdjacentHTML(
      "beforeend",
      `<p style="color:#b91c1c;padding:12px;">Dashboard failed to load: ${error.message}</p>`
    );
  }
}

main();
