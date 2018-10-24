import 'whatwg-fetch'


/**
 * @name login
 * 
 * @param {int} uid
 * @param {string} passwd
 */
export const login = async (uid, passwd) => {
    let res = await fetch('/api/std/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            uid: uid,
            passwd: passwd
        })
    });

    let json = await res.json();
    if(res.status !== 200) {
        throw json;
    } 

    return json;
}


/**
 * @name passwdReset
 * 
 * @param {int} uid 
 * @param {string} old_passwd 
 * @param {string} new_passwd 
 * @param {string} new_passwd_r 
 */
export const passwdReset = async (uid, old_passwd, new_passwd, new_passwd_r) => {
    let res = await fetch('api/std/'+uid+'/passwd/reset', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            old_passwd: old_passwd,
            new_passwd: new_passwd,
            new_passwd_r: new_passwd_r
        })
    });

    let json = await res.json();
    
    if(res.status !== 200) {
        throw json;
    }

    return json;
    
}


/**
 * @name query
 * 
 * @param {int} uid 
 * @param {string} week 
 */
export const query = async (uid, week) => {
    try{
        var res = await fetch('/api/std/' + uid + '/' + week);
        
    }catch(err){
        console.log(err);
    }


    let json = await res.json();
    if(res.status != 200){
        throw json;
    }
    
    return json.data;

}

/**
 * 
 * @param {int} uid 
 * @param {string} week 
 * @param {string} day 
 * @param {string} time 
 * @param {string} teacher 
 * @param {string} reason 
 */
export const book = async (uid, week, day, time, teacher, reason) => {
    let res = await fetch('/api/std/' + uid + 'book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            week: week,
            day: day,
            time: time,
            title: 'a',
            teacher: teacher,
            info: 'a',
            reason: reason,
            remark: 'a'
        })
    });

    let json = await res.json();

    if(res.status !== 200){
        throw json;
    }

    return {
        reserve_id : json.reserve_id
    };

}

export const getReserveList = async (uid) => {
    let res = await fetch('/api/std/' + str_uid + '/reserve/list');

    let json =res.json();

    if(res.status !== 200){
        throw json;
    }

    return {
        reserve_list: json.data,
        user: json.user
    };
}

export const queryByReserveId = async (uid, reserve_id) => {
    let res  = await fetch('/api/std/' + uid + '/reserve/' + reserve_id);

    let json = await res.json();

    if(json.status !== 200){
        throw json;
    }

    return {
        reserve: json.data,
        user: json.user
    };
}

export const modify = async (uid, reserve_id) => {
    let res = await fetch('/api/std/' + uid + '/reserve/' + reserve_id);

    let json = await res.json();

    if(res.status !== 200){
        throw json;
    }

     
}
