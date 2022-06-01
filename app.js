function unitCalculation() {
  const unitInputField = parseFloat(
    document.getElementById("current-unit-input").value
  );
  const displayCurrentUnit = document.getElementById("current-unit");
  displayCurrentUnit.innerText = unitInputField;
  let oldUnitField = document.getElementById("old-unit");
  const oldUnit = parseFloat(document.getElementById("old-unit").innerText);
  const usedUnitCalc = unitInputField - oldUnit;
  const usedInputField = document.getElementById("used-unit");
  usedInputField.innerText = usedUnitCalc;
  const perUnitCost = 6;
  const unitPriceField = document.getElementById("unit-price");
  unitPriceField.innerText = perUnitCost;
  const totalPrice = perUnitCost * usedUnitCalc;
  const totalPriceField = document.getElementById("total-price");
  totalPriceField.innerText = totalPrice;
  oldUnitField.innerText = unitInputField;
}
