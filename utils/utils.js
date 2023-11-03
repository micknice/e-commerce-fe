import subCatLookup from "./subCatLookup";
import subCatShortened from './subCatShortened'
import catShortened from './catShortened'


export const replaceSpacesAndAmpersands = (inputString) => {
    const stringWithDashes = inputString.replace(/ /g, '-');
    
    const finalString = stringWithDashes.replace(/&/g, 'and');
  
    return finalString;
  }

export const reverseReplacement = (inputString) => {
    const stringWithSpaces = inputString.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const finalString = stringWithSpaces.replace(/\band\b/g, ' & ').replace(/\b\w/g, c => c.toUpperCase());

  return finalString;
}

export const extractTextBetweenSuffixAndLastSlash = (inputString) => {
  // Use a regular expression to match the desired pattern
  const lastIndex = inputString.lastIndexOf('/');

  if (lastIndex !== -1) {
    // Use substring to extract the text after the last '/'
    return inputString.substring(lastIndex + 1);
  } else {
    // Return the original string if no '/' is found
    return inputString;
  }
}

export const imgUrlToFilePath = (url) => {
  const extract = extractTextBetweenSuffixAndLastSlash(url)
  return replaceSpacesAndAmpersands(extract)
}

export const checkSubCat = (subCat) => {
  return subCatLookup[subCat]
}

export const getSubCatShort = (subCat) => {
  return subCatShortened[subCat].toUpperCase()
}
export const getCatShort = (subCat) => {
  return catShortened[subCat].toUpperCase()
}