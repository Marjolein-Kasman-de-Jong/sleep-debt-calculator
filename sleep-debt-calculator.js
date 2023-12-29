// Get any given night's number of hours of sleep

const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 8;
        case 'tuesday':
            return 8;
        case 'wednesday':
            return 8;
        case 'thursday':
            return 8;
        case 'friday':
            return 7;
        case 'saturday':
            return 8;
        case 'sunday':
            return 8;
    }
}

// Get total hours actually slept in a week

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

// Get ideal hours of sleep in a week

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
}

// Calculate and return sleep debt

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got more sleep than needed. You slept ${actualSleepHours - idealSleepHours} hours(s) more than necessary.`);
    } else {
        console.log(`You should get some rest. You slept ${idealSleepHours - actualSleepHours} hour(s) less than necessary.`);
    }
}

// Start the program

calculateSleepDebt();