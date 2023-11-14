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

export const getSubCatShort = (subCat, toUpperCase=true) => {
  if(toUpperCase) {
    return subCatShortened[subCat].toUpperCase()
  } else {
    return subCatShortened[subCat]
  }
}
export const getCatShort = (subCat, toUpperCase=true) => {
  if(toUpperCase) {
    return catShortened[subCat].toUpperCase()
  } else {
    return catShortened[subCat]
  }
}

export const reverseCatLookup = (searchValue) => {
  for (const key in catShortened) {
    if (catShortened.hasOwnProperty(key) && catShortened[key] === searchValue) {
      return key; 
    }
  }
  return null; 
}
export const reverseSubCatLookup = (searchValue) => {
  for (const key in subCatShortened) {
    if (subCatShortened.hasOwnProperty(key) && subCatShortened[key] === searchValue) {
      return key; 
    }
  }
  return null; 
}

function switchKeysAndValues(obj) {
  const switchedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      switchedObj[obj[key]] = key;
    }
  }
  return switchedObj;
}

export const getProductFromTitle = (title) => {
  const lookup = switchKeysAndValues(catShortened)
  return lookup[title]
}

export const sortByName = (arr) => {
  arr.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1; 
    } else if (nameA > nameB) {
      return 1; 
    } else {
      return 0;
    }
  });
}
export const sortByPrice = (arr) => {
  arr.sort((a, b) => {
    const priceA = a.price
    const priceB = b.price

    if (priceA < priceB) {
      return -1; 
    } else if (priceA > priceB) {
      return 1; 
    } else {
      return 0;
    }
  });
}
export const sortByPopularity = (arr) => {
  arr.sort((a, b) => {
    const idA = a.id
    const idB = b.id

    if (idA < idB) {
      return -1; 
    } else if (idA > idB) {
      return 1; 
    } else {
      return 0;
    }
  });
}








