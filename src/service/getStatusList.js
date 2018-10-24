import { query } from '@/service/index.js'

export const getStatusList = async function(uid, week){
    try{
        let res = await query(uid, week);
        
        let result = res;
        let statusList = new Array();
        for(let i=0; i<result.length; i++){
            statusList[i+1] = new Array();
            for(let j=0; j<result[i].available.length; j++){
                let day = (result[i].available)[j];
                statusList[i+1][day] = 'available';
            }
            for(let j=0; j<result[i].reserved.length; j++){
                statusList[i+1][(result[i].reserved)[j]] = 'reserved';
            }
           for(let j=0; j<result[i].unavailable.length; j++){
                statusList[i+1][(result[i].unavailable[j])] = 'unavailable';
            }
        }
        console.log(statusList);
            return statusList;
    }catch(err){
        console.log(err);
    }
}