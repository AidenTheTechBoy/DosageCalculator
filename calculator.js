const LBS_TO_KG = 0.45359237;

function lbsToKg(lbs) {
    return {
        units: 'kg',
        result: lbs * LBS_TO_KG,
        calculation: `${rnd(lbs)} lbs * ${rnd(LBS_TO_KG)}`
    };
}

function calculateDosage(weightKg, dosageMgPerKg) {
    return {
        units: 'mg',
        result: weightKg * dosageMgPerKg,
        calculation: `${rnd(weightKg)} kg * ${rnd(dosageMgPerKg)} mg/kg`
    };
}

function calculateNumberOfPills(dosageMg, pillSizeMg) {
    return {
        units: 'pills',
        result: dosageMg / pillSizeMg,
        calculation: `${rnd(dosageMg)} mg / ${rnd(pillSizeMg)} mg`
    };
}

function calculateActualDosage(pillCount, dosageMgPerPill) {
    return {
        units: 'mg',
        result: pillCount * dosageMgPerPill,
        calculation: `${rnd(pillCount)} pills * ${rnd(dosageMgPerPill)} mg`
    };
}

function calculateDifference(expectedDosage, actualDosage) {
    return {
        units: 'mg',
        result: expectedDosage.result - actualDosage.result,
        calculation: `${rnd(expectedDosage.result)} mg - ${rnd(actualDosage.result)} mg`
    };
}

function rnd(num) {
    return Math.round(num * 1000) / 1000;
}

function roundToNearestHundredth(num) {
    return Math.round(num * 100) / 100;
}

function roundToNearestQuarter(number) {
    return Math.round(number * 4) / 4;
}