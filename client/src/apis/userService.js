import axios from 'axios'

export const apiGetOneUser = (token) => new Promise(async (resolve, reject) => {
    try{
        let response = await axios({
            method: 'get',
            url: 'http://localhost:5000/api/user/get-one',
            headers: {
                Authentication : token
            }
        })
        resolve(response)
    }
    catch(err){
        reject(err)
    }
})