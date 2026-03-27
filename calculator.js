const LBS_TO_KG = 0.45359237;

function calculateDosage(weightLbs, dosageMgPerKg) {
    const weightKg = weightLbs * LBS_TO_KG;
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