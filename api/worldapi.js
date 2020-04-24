const axios = require("axios");
export  async function AllStats(){
    const result = await axios({
        "method":"GET",
        "url":"https://covid-193.p.rapidapi.com/statistics",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"covid-193.p.rapidapi.com",
        "x-rapidapi-key":"673d053156msha092317cafb50b4p157af0jsna18dc4b39089"
        },"params":{
        "country":"all"
        }
        })
        .then((response)=>{
        console.log(response.data)
        const res = response.data
        const data = res.response[0]
        return data
        })
        .catch((error)=>{
        console.log(error)
        return 0
        })

        return result
}

export async function WorldStats(){
    const axios = require("axios");

    const result = await axios({
        "method":"GET",
        "url":"https://covid-193.p.rapidapi.com/statistics",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"covid-193.p.rapidapi.com",
        "x-rapidapi-key":"673d053156msha092317cafb50b4p157af0jsna18dc4b39089"
        }
        })
        .then((response)=>{
        console.log(response)
        const res = response.data.response
        return res
        })
        .catch((error)=>{
        console.log(error)
        return 0
        })

        return result
}

export async function IndiaStats(){
    const result = await axios({
        "method":"GET",
        "url":"https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise",
        })
        .then((response)=>{
        console.log("India Response")
        console.log(response.data)
        const res = response.data
        return res
        })
        .catch((error)=>{
        console.log(error)
        return 0
        })

        return result
}

export async function IndTests(){
    const result = await axios({
        "method":"GET",
        "url":"https://api.rootnet.in/covid19-in/stats/testing/latest",
            })
        .then((response)=>{
        console.log("India Response")
        console.log(response.data)
        const res = response.data.data
        return res
        })
        .catch((error)=>{
        console.log(error)
        return 0
        })

        return result
}

export async function HospitalData(){
    const result = await axios({
        "method":"GET",
        "url":"https://api.rootnet.in/covid19-in/stats/hospitals",
            })
        .then((response)=>{
        console.log("Hospital")
        console.log(response.data)
        const res = response.data.data.regional
        return res
        })
        .catch((error)=>{
        console.log(error)
        return 0
        })

        return result
}


export async function IndHistory(){
    const result = await axios({
        "method":"GET",
        "url":"https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history",
            })
        .then((response)=>{
        console.log("India History")
        console.log(response.data)
        const res = response.data.data.history
        return res
        })
        .catch((error)=>{
        console.log(error)
        return 0
        })
        console.log("Result")
        console.log(result)
        return result
}

export async function WorldHistory(){
        
    const result = await axios({
        "method":"GET",
        "url":"https://covid-193.p.rapidapi.com/history",
        "params":{
            "country":"All"
            },
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"covid-193.p.rapidapi.com",
        "x-rapidapi-key":"673d053156msha092317cafb50b4p157af0jsna18dc4b39089"
        },
        })
        .then((response)=>{
        console.log('Received')
        const res = response.data.response
        console.log(res.slice(0,21))
        const data = res[0].day
        var final = []
        res.map(value=>{
            if(value.day==data){
                final.push(value)
            }
        })
        return final
        })
        .catch((error)=>{
        console.log(error)
        return 0
        })

        return result
}


   export const data={
        "contacts":
        {"primary":{"number":"+91-11-23978046","number-tollfree":"1075","email":"ncov2019@gov.in","twitter":"https://twitter.com/MoHFW_INDIA","facebook":"https://www.facebook.com/MoHFWIndia","media":["https://pib.gov.in/newsite/pmreleases.aspx?mincode=31"]},
        "regional":[
            {"loc":"Andhra Pradesh","number":"+91-866-2410978"},{"loc":"Arunachal Pradesh","number":"+91-9436055743"},
        {"loc":"Assam","number":"+91-6913347770"},{"loc":"Bihar","number":"104"},{"loc":"Chhattisgarh","number":"104"},
        {"loc":"Goa","number":"104"},{"loc":"Gujarat","number":"104"},{"loc":"Haryana","number":"+91-8558893911"},
        {"loc":"Himachal Pradesh","number":"104"},{"loc":"Jharkhand","number":"104"},{"loc":"Karnataka","number":"104"},
        {"loc":"Kerala","number":"+91-471-2552056"},{"loc":"Madhya Pradesh","number":"+91-755-2527177"},{"loc":"Maharashtra","number":"+91-20-26127394"},
        {"loc":"Manipur","number":"+91-3852411668"},{"loc":"Meghalaya","number":"108"},{"loc":"Mizoram","number":"102"},{"loc":"Nagaland","number":"+91-7005539653"},
        {"loc":"Odisha","number":"+91-9439994859"},{"loc":"Punjab","number":"104"},{"loc":"Rajasthan","number":"+91-141-2225624"},
        {"loc":"Sikkim","number":"104"},{"loc":"Tamil Nadu","number":"+91-44-29510500"},{"loc":"Telengana","number":"104"},
        {"loc":"Tripura","number":"+91-381-2315879"},{"loc":"Uttarakhand","number":"104"},{"loc":"Uttar Pradesh","number":"18001805145"},
        {"loc":"West Bengal","number":"1800313444222"},{"loc":"Andaman and Nicobar Islands","number":"+91-3192-232102"},
        {"loc":"Chandigarh","number":"+91-9779558282"},{"loc":"Dadra and Nagar Haveli","number":"104"},{"loc":"Daman & Diu","number":"104"},
        {"loc":"Delhi","number":"+91-11-22307145"},{"loc":"Jammu and Kashmir","number":"+91-191-25209823"},{"loc":"Ladakh","number":"+91-1982-256462"},
        {"loc":"Lakshadweep","number":"104"},{"loc":"Puducherry","number":"104"}
                ]
            }
    }


export default AllStats;