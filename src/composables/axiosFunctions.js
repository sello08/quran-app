import axios from 'axios'

async function getChapterList(lang) {
  try {
   const data = await axios({
      method: 'get',
      url: 'https://api.quran.com/api/v4/chapters?language='+ lang +''
    })
      return data.data.chapters;
  }
  catch(err){
    console.log(err.message)
    error.value = err.message
  }
}


async function getChapterDetails(x , lang ) {
  try {
    const data = await axios({
    method: 'get',
    url: 'https://api.quran.com/api/v4/chapters/'+ x +'/info?language='+ lang +''
  })
    return data.data.chapter_info
}
catch(err){
  console.log(err.message)
  error.value = err.message

}
}

async function getChapterContent(chapterNum, sel, lang) {
  try {
    const data = await axios({
    method: 'get',
    url: 'https://api.quran.com/api/v4/verses/by_chapter/'+ chapterNum +'?language='+ lang +'&words=true&page='+ sel +'&per_page=10'
  })
    return data.data.verses
}
catch(err){
  console.log(err.message)
  error.value = err.message
}
}

async function getChapterInfo(y) {
  try {
   const data = await axios({
      method: 'get',
      url: 'https://api.quran.com/api/v4/chapters/'+ y +'?language=en'
    })
      return data.data.chapter;
  }
  catch(err){
    console.log(err.message)
    error.value = err.message
  }
}


export { getChapterList, getChapterDetails, getChapterContent, getChapterInfo}