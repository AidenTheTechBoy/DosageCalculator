const LBS_TO_KG = 0.45359237;

function lbsToKg(lbs) {
    return lbs * LBS_TO_KG;
}

function calculateDosage(weightKg, dosageMgPerKg) {
    return weightKg * dosageMgPerKg;
}

function calculateNumberOfPills(dosageMg, pillSizeMg) {
    return dosageMg / pillSizeMg;
}

function roundToNearestHundredth(num) {
    return Math.round(num * 100) / 100;
}

function roundToNearestQuarter(number) {
    return Math.round(number * 4) / 4;
}