const hijriMonth =  {
    "1": "Muharram",
    "2": "Safar",
    "3": "Rabiʻ I",
    "4": "Rabiʻ II",
    "5": "Jumada I",
    "6": "Jumada II",
    "7": "Rajab",
    "8": "Shaʻban",
    "9": "Ramadan",
    "10": "Shawwal",
    "11": "Dhuʻl-Qiʻdah",
    "12": "Dhuʻl-Hijjah"
}


export default function getMonth(id) {
    return hijriMonth[id]
}