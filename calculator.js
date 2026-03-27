const LBS_TO_KG = 0.45359237;

function calculateDailyDosageMg(weightLbs, dosageMgPerKg) {
    const weightKg = weightLbs * LBS_TO_KG;
    return dosageMgPerKg * weightKg;
}

function calculateIndividualDosage(dailyDosageMg, frequencyPerDay) {
    return dailyDosageMg / frequencyPerDay;
}

function calculateNumberOfPills(dosageMg, pillSizeMg) {
    return dosageMg / pillSizeMg;
}

function roundToNearestHundredth(num) {
    return Math.round(num * 100) / 100;
}

const dailyDosageMg = calculateDailyDosageMg(18.2, 25)
const individualDosageMg = calculateIndividualDosage(dailyDosageMg, 2)
const dailyPills = calculateNumberOfPills(dailyDosageMg, 50)
const individualPills = calculateNumberOfPills(individualDosageMg, 50)
console.log(roundToNearestHundredth(dailyDosageMg) + " mg daily")
console.log(roundToNearestHundredth(individualDosageMg) + " mg per dose")
console.log(roundToNearestHundredth(dailyPills) + " pills per day")
console.log(roundToNearestHundredth(individualPills) + " pills per dose")