const{kafka}= require('./Client');
const readlines= require('readline');

// creating a interface to produce information about rider
const rl = readlines.createInterface({

    input:process.stdin,
    output:process.stdout,

})

async function init(){
    const producer = kafka.producer();

    console.log('producer connecting');


    await producer.connect();

    console.log('Producer connected successfully');

    // sending producer 


    rl.setPrompt('Enter data ')
    rl.prompt();


    rl.on('line',async function(line){
        const [riderName,location]= line.split('   ')
        await producer.send({
            topic:"Pathao-updates",
            messages:[
                // key value and location 
                {
                    partition:location.toLocaleLowerCase()='kathmandu'?0:1,
                    key:'location update',
                    value:JSON.stringify({name:riderName,loc:location}),
            }
    
            ],
        }).on('close', async()=>{
            await producer.disconnect();

        })
    });

   
    
}

init();

