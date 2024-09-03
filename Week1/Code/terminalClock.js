//Create a Terminal Clock (HH:MM:SS)

const displayTime = ()=>{
    const now = new Date(); // Get the current date and time

    let hours = now.getHours();   // Get the current hour (0-23)
    let minutes = now.getMinutes(); // Get the current minute (0-59)
    let seconds = now.getSeconds(); // Get the current second (0-59)

    //Add leading zeros if necessary
    //if single digit it will add zero to it 

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');


    const timeString = `${hours}:${minutes}:${seconds}`;
    console.clear(); // Clear the terminal
    console.log(timeString); // Display the current time
}
// setInterval(()=>{
//     displayTime()
// },1000)

setInterval(displayTime, 1000);//this will also work