<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SGIP Eligibility & Incentive Calculator</title>
  <style>
    :root {
      --primary: #fdb813;
      --secondary: #003c71;
      --accent: #005eb8;
      --bg: #f9f9f9;
      --text: #333;
      --muted: #555;
    }
    html, body {
      height: 100%;
    }
    body {
      margin: 0;
      padding: 0;
      background: var(--bg);
      color: var(--text);
      font-family: Arial, sans-serif;
    }
    h1 {
      color: var(--primary);
      text-align: center;
      margin: 20px 0;
      font-size: 1.8rem;
    }
    .container {
      display: flex;
      flex-wrap: wrap;
      max-width: 1200px;
      margin: 0 auto;
      padding: 10px;
      gap: 20px;
    }
    .maps, .calculator {
      flex: 1 1 100%;
    }
    @media (min-width: 768px) {
      .maps { flex: 1 1 60%; }
      .calculator { flex: 1 1 38%; }
    }
    .map-container {
      border: 1px solid var(--accent);
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 20px;
      background: #fff;
    }
    .map-container h2 {
      margin: 0;
      padding: 10px;
      background: var(--secondary);
      color: white;
      font-size: 1rem;
    }
    .map-container .map-actions {
      padding: 8px 10px 0 10px;
      font-size: 0.9rem;
    }
    .map-container .map-actions a {
      color: var(--accent);
      text-decoration: none;
      font-weight: bold;
    }
    .map-container iframe {
      width: 100%;
      height: 400px;
      border: 0;
      pointer-events: auto;
      display: block;
    }
    form > div {
      margin-bottom: 15px;
    }
    label {
      display: block;
      font-weight: bold;
      color: var(--secondary);
      margin-bottom: 5px;
      font-size: 1rem;
    }
    select, input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 1rem;
    }
    button {
      background: var(--primary);
      color: white;
      border: none;
      padding: 12px 20px;
      font-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s;
    }
    button:hover {
      background: var(--accent);
    }
    .result {
      margin-top: 20px;
      padding: 15px;
      background: white;
      border-left: 5px solid var(--primary);
      border-radius: 4px;
      font-size: 1rem;
      line-height: 1.4;
    }
    small {
      color: var(--muted);
      font-size: 0.875rem;
    }

    /* --- Mobile fixes --- */
    @media (max-width: 767px) {
      .container {
        flex-direction: column;
        padding: 5px;
        gap: 10px;
      }
      h1 { font-size: 1.5rem; margin: 10px 0; }
      .map-container iframe {
        height: 85vh;
        min-height: 500px;
      }
      .map-container h2 { font-size: 0.9rem; padding: 8px; }
      label { font-size: 0.9rem; }
      select, input { font-size: 0.95rem; padding: 8px; }
      button {
        width: 100%;
        font-size: 1rem;
        padding: 12px;
      }
    }
  </style>
</head>
<body>
  <h1>SGIP Eligibility & Incentive Calculator</h1>
  <div class="container">
    <div class="maps">
      <div class="map-container">
        <h2>SB 535 Disadvantaged Communities Map</h2>
        <div class="map-actions">
          <a href="https://experience.arcgis.com/experience/1c21c53da8de48f1b946f3402fbae55c/page/SB-535-Disadvantaged-Communities/" target="_blank" rel="noopener">🔎 Open full screen (best on mobile)</a>
        </div>
        <iframe
          src="https://experience.arcgis.com/experience/1c21c53da8de48f1b946f3402fbae55c/page/SB-535-Disadvantaged-Communities/"
          title="DAC Map"
          allowfullscreen
        ></iframe>
      </div>
      <div class="map-container">
        <h2>Community Air Protection (CAP UC) Map</h2>
        <div class="map-actions">
          <a href="https://capuc.maps.arcgis.com/apps/webappviewer/index.html?id=5bdb921d747a46929d9f00dbdb6d0fa2" target="_blank" rel="noopener">🔎 Open full screen (best on mobile)</a>
        </div>
        <iframe
          src="https://capuc.maps.arcgis.com/apps/webappviewer/index.html?id=5bdb921d747a46929d9f00dbdb6d0fa2"
          title="CAP UC Map"
          allowfullscreen
        ></iframe>
      </div>
      <div class="map-container">
        <h2>SCE Shutoff (Outage Status) Tool</h2>
        <p style="padding:10px;">
          <a href="https://www.sce.com/outages-safety/outage-center/check-outage-status" target="_blank" style="color:var(--accent); text-decoration:none; font-weight:bold;">🔗 Check Public Safety Shutoff Status</a>
        </p>
      </div>
    </div>

    <div class="calculator">
      <form id="calcForm">
        <div>
          <label for="customerType">1. Host Customer Class</label>
          <select id="customerType">
            <option value="">Select type</option>
            <option value="residential-single">Residential Single-Family</option>
            <option value="residential-multi">Residential Multifamily</option>
            <option value="commercial">Commercial/Business</option>
            <option value="industrial">Industrial/Agricultural</option>
          </select>
          <small>Must be utility customer of record; rentals need explanation letter.</small>
        </div>
        <div>
          <label for="inDAC">2. Disadvantaged Community (DAC)?</label>
          <select id="inDAC"><option value=""></option><option value="yes">Yes</option><option value="no">No</option></select>
        </div>
        <div>
          <label for="inFire">3. Tier 2/3 Wildfire Threat Zone?</label>
          <select id="inFire"><option value=""></option><option value="yes">Yes</option><option value="no">No</option></select>
        </div>
        <div>
          <label for="inPSPS">4. Located in a PSPS Shutoff Area?</label>
          <select id="inPSPS"><option value=""></option><option value="yes">Yes</option><option value="no">No</option></select>
          <small>Refer to CPUC PSPS lookup tool separate from this calculator.</small>
        </div>
        <div>
          <label for="equityPathway1">5. Multifamily Equity Pathway</label>
          <select id="equityPathway1"><option value=""></option><option value="deed">Deed-restricted low-income housing (≥5 units)</option><option value="80pct">≥80% units ≤60% AMI</option><option value="mash">Reserved MASH/SOMAH funds</option></select>
        </div>
        <div>
          <label for="singleEquity">6. Single-Family Equity Criterion</label>
          <select id="singleEquity"><option value=""></option><option value="income">Income verified per HUD</option><option value="program">Participated in SASH/DAC-SASH/CARE/FERA/ESA</option></select>
        </div>
        <div>
          <label for="care">7. CARE Program Participation</label>
          <select id="care"><option value=""></option><option value="yes">Yes</option><option value="no">No</option><option value="unsure">Unsure</option></select>
          <small>Customers must provide proof of eligibility status in the MASH, SOMAH, SASH, or DAC-SASH, CARE, FERA, or ESA program. CARE, FERA, and ESA documents must reflect income verification has been completed as a result of participation in the programs.</small>
        </div>
        <div>
          <label for="govAssistance">8. Receiving any government assistance (e.g., SNAP, Medicaid, SSI, etc.)?</label>
          <select id="govAssistance"><option value=""></option><option value="yes">Yes</option><option value="no">No</option></select>
        </div>

        <!-- NEW: Square Footage input -->
        <div>
          <label for="squareFootage">9. Home Square Footage</label>
          <input type="number" id="squareFootage" min="0" placeholder="e.g., 2000" />
          <small>We’ll estimate a PV system size if you leave the PV size blank. Uses 0.0035&nbsp;kW per ft² (≈ 7&nbsp;kW for 2,000&nbsp;ft²). Adjustable in code.</small>
        </div>

        <div>
          <label for="capacity">10. Storage Capacity (kWh)</label>
          <input type="number" id="capacity" min="0" value="30.6" placeholder="Default 30.6 kWh (3 batteries)" />
          <small>Each project defaults to 3 batteries totaling 30.6&nbsp;kWh.</small>
        </div>
        <div>
          <label for="solarCapacity">11. Solar PV Capacity (kW)</label>
          <input type="number" id="solarCapacity" min="0" step="0.1" placeholder="Leave blank to auto-estimate from square footage" />
        </div>
        <div>
          <label for="backup">12. Backup Capability?</label>
          <select id="backup"><option value=""></option><option value="yes">Yes</option><option value="no">No</option></select>
        </div>
        <div>
          <button type="button" id="btnCheck">Calculate Eligibility & Incentive</button>
        </div>
      </form>
      <div id="result" class="result" style="display:none;"></div>
      <script>
        const solarRate = 3100;
        const resiliencyEqRate = 1.00;
        const equityRate = 0.85;
        const sjvResRate = 1.10;
        const smallResRate = 0.15;
        const largeScaleRate = 0.25;

        // Rule of thumb for estimating PV system size from square footage
        const KW_PER_SQFT = 0.0035; // 0.0035 kW per ft² (≈ 3.5 W/ft²)

        document.getElementById('btnCheck').addEventListener('click', () => {
          const cust = document.getElementById('customerType').value;
          const inFire = document.getElementById('inFire').value === 'yes';
          const inPSPS = document.getElementById('inPSPS').value === 'yes';
          const multiPath = document.getElementById('equityPathway1').value;
          const singlePath = document.getElementById('singleEquity').value;
          const careSelected = document.getElementById('care').value === 'yes';
          const govAssist = document.getElementById('govAssistance').value === 'yes';
          const squareFootage = parseFloat(document.getElementById('squareFootage').value) || 0;

          const capacityInput = document.getElementById('capacity');
          const solarCapacityInput = document.getElementById('solarCapacity');

          let capacity = parseFloat(capacityInput.value);
          if (isNaN(capacity) || capacity <= 0) capacity = 30.6; // default to 3 batteries

          let solarCap = parseFloat(solarCapacityInput.value) || 0;
          let autoPvKwUsed = null;

          // Auto estimate PV size if not provided but square footage is present
          if (!solarCap && squareFootage > 0) {
            autoPvKwUsed = Math.max(1, (squareFootage * KW_PER_SQFT)); // minimum 1 kW
            solarCap = parseFloat(autoPvKwUsed.toFixed(1));
          }

          let rate = 0, budget = '';

          if ((cust === 'residential-multi' && multiPath) || (cust === 'residential-single' && singlePath)) {
            budget = 'Equity Storage';
            rate = sjvResRate; // $1.10/Wh
          } else if (inFire || inPSPS) {
            budget = 'Equity Resiliency Storage';
            rate = resiliencyEqRate; // $1.00/Wh
          } else if (cust.startsWith('residential')) {
            budget = 'Small Residential Storage';
            rate = smallResRate; // $0.15/Wh
          } else {
            budget = 'Large-Scale Storage';
            rate = largeScaleRate; // $0.25/Wh
          }

          const storageIncentive = capacity * 1000 * rate;
          const solarIncentive = solarCap * solarRate;
          const totalIncentive = storageIncentive + solarIncentive;

          let explanation = `You qualify under the **${budget}** category at a rate of $${rate.toFixed(2)}/Wh, resulting in $${storageIncentive.toLocaleString()} for ${capacity.toLocaleString()} kWh of storage. `;

          if (solarCap > 0) {
            explanation += `Additionally, ${solarCap.toLocaleString()} kW of solar PV earns $${solarIncentive.toLocaleString()} at $${solarRate}/kW. `;
          }

          if (autoPvKwUsed !== null) {
            explanation += `Based on ${squareFootage.toLocaleString()} ft², we estimated a typical PV system size of ~${solarCap.toLocaleString()} kW (using ${KW_PER_SQFT * 1000} W/ft²). `;
          }

          if (careSelected)
            explanation += `As a CARE participant, you save 20% on your electric bill. `;
          if (govAssist)
            explanation += `Because you indicated you're receiving government assistance, you may qualify for CARE automatically. `;

          explanation += `Total SGIP incentives: $${totalIncentive.toLocaleString()}.`;

          const res = document.getElementById('result');
          res.innerHTML = `<p>${explanation}</p>`;
          res.style.display = 'block';
        });
      </script>
    </div>
  </div>
</body>
</html>
// Express server scraping selfgenca.com program metrics
