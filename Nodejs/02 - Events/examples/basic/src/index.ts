import TempSensor from "./TempSensor.ts";

//מייצר את החיישן
let garden = new TempSensor();

//reading מבקש מהחיישן להאזין לאירוע של 
//כל פעם שהאירוע מתקיים, החיישן מקבל את המידע ומדפיס אותו עם 3 ספרות אחרי הנקודה.
garden.on('reading', (payload) => {
    let temp = Number(payload);
    console.log(temp.toFixed(3));
});

garden.once('alert', (payload) => {
    console.log('ALERT!', payload);
    garden.off('reading', () => {
        console.log('Stop reading');
    });
})