var unityDiagnostics = (function () {
  var overlayOpen = false;
  var intervalId = 0;

  function openDiagnosticsDiv(GetMemInfoFunc) {
    // if not open, open!
    if (!overlayOpen) {
      var diagnostics_div = document.getElementById('diagnostics-overlay');
      if (!diagnostics_div) {
        createDiagnosticsLayout();
      }

      var totalJSMemDiv = document.getElementById("jsTotalMem");
      var usedJSMemDiv = document.getElementById("jsUsedMem");
      var totalWASMHeapDiv = document.getElementById("wasmTotalMem");
      var usedWASMHeapDiv = document.getElementById("wasmUsedMem");

      intervalId = setInterval(updateWebMemd, 500);
      document.getElementById("diagnostics-overlay").style.height = "20%";
      diagnostics_icon.style.filter = "grayscale(1)";
      overlayOpen = true;
    }

    function createDiagnosticsLayout() {
      diagnostics_div = document.createElement("div");
      diagnostics_div.id = "diagnostics-overlay";

      document.body.appendChild(diagnostics_div);

      var diagnostics_btn = document.createElement("div");
      diagnostics_btn.id = "diagnostics-btn";
      diagnostics_btn.innerHTML = "X";
      diagnostics_btn.addEventListener("click", closeOverlay);

      diagnostics_div.appendChild(diagnostics_btn);

      var diagnostics_summary = document.createElement("div");
      diagnostics_summary.id = "diagnostics-summary";

      diagnostics_div.appendChild(diagnostics_summary);

      createDiagnosticsRow(diagnostics_summary, "Total JS Memory", "jsTotalMem", false);
      createDiagnosticsRow(diagnostics_summary, "Used JS Memory", "jsUsedMem", false);
      createDiagnosticsRow(diagnostics_summary, "Total WASM Heap", "wasmTotalMem", true);
      createDiagnosticsRow(diagnostics_summary, "Used WASM Heap", "wasmUsedMem", true);

    }

    function createDiagnosticsRow(diagnostics_summary, labelInnerHtml, spanId, indent) {
      var data_row = document.createElement("div");
      data_row.className = "data-row";
      diagnostics_summary.appendChild(data_row);

      var label = document.createElement("div");
      label.className = "label";

      var data = document.createElement("div");
      data.className = "data";
      data_row.appendChild(data);

      var span = document.createElement("span");
      data.appendChild(span);

      label.innerHTML = labelInnerHtml;
      span.id = spanId;
      if (indent) {
        var indent = document.createElement("div");
        indent.className = "indented";
        data_row.appendChild(indent);
        indent.appendChild(label);
      } else {
        data_row.append(label);
      }
      data_row.append(data);
    }

    function updateWebMemd() {
      var memInfo = GetMemInfoFunc();
      if (isNaN(memInfo.totalJSHeapSize) && isNaN(memInfo.usedJSHeapSize)) {
        totalJSMemDiv.textContent = "N/A";
        usedJSMemDiv.textContent = "N/A";
      } else {
        totalJSMemDiv.textContent = formatBytes(memInfo.totalJSHeapSize);
        usedJSMemDiv.textContent = formatBytes(memInfo.usedJSHeapSize);
      }
      totalWASMHeapDiv.textContent = formatBytes(memInfo.totalWASMHeapSize);
      usedWASMHeapDiv.textContent = formatBytes(memInfo.usedWASMHeapSize);
    }

    function closeOverlay() {
      clearInterval(intervalId);
      intervalId = 0;
      document.getElementById("diagnostics-overlay").style.height = "0px";
      diagnostics_icon.style.filter = "grayscale(0)";
      overlayOpen = false;
    }

    function formatNumber(num) {
      num = num || 0;
      var num_str = num.toString();
      if (num >= 1000) return num_str.substr(0, 4);
      else return num_str.substr(0, 5);
    }

    function formatBytes(bytes) {
      if (bytes >= 1024 * 1024 * 1024) return formatNumber(bytes / (1024 * 1024 * 1024)) + '\xa0GB';
      else if (bytes >= 1024 * 1024) return formatNumber(bytes / (1024 * 1024)) + '\xa0MB';
      else if (bytes >= 1024) return formatNumber(bytes / 1024) + '\xa0KB';
      else return formatNumber(bytes) + ' B';
    }
  }

  return {
    openDiagnosticsDiv: openDiagnosticsDiv
  };

})();
