import request, { gql } from "graphql-request";


export const getJpLetters =async()=>{
    const getJpLettersQuery = gql`
    query Assets {
      jpLetterHiraganas {
        jpSingleLetterHiragana
        englishPronounciationHiragana
        imageHiragana {
          url
          fileName
          id
        }
        audioHiragana {
          url
          id
        }
      }
    }
    
      
    `
    const result = await request(process.env.NEXT_PUBLIC_MASTER_ENV, getJpLettersQuery)
    return result;
}