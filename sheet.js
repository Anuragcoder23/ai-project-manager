
import axios from "axios"
import Papa from "papaparse"

export default async function handler(req,res){

const SHEET =
"https://docs.google.com/spreadsheets/d/1QlcIoPeia65BUxFffLEZJid0T0O58l5iPObTjUkURGk/export?format=csv"

const response = await axios.get(SHEET)

const data = Papa.parse(response.data,{
header:true
}).data

res.status(200).json(data)

}
