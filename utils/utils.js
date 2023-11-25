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
  console.log("!!!!", inputString)
  const lastIndex = inputString.lastIndexOf('/');

  if (lastIndex !== -1) {
    return inputString.substring(lastIndex + 1);
  } else {
    return inputString;
  }
}

export const imgUrlToFilePath = (url) => {
  console.log('img url to filepath')
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
  for (const key in subCatLookup) {
    if (subCatLookup.hasOwnProperty(key) && subCatLookup[key] === searchValue) {
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
export const formatDescription = (inputString) => {
  const resultArray = [];
  let currentSubArray = [];
  const commaSplit = inputString.split(',');

  commaSplit.forEach(item => {
    const colonSplit = item.split(':');
    if (/^[a-z]/i.test(colonSplit[0].trim())) {
      resultArray.push(colonSplit[0].trim());
      if (colonSplit.length > 1) {
        currentSubArray = currentSubArray.concat(colonSplit.slice(1).map(str => str.trim()));
      }
    } else {
      if (currentSubArray.length > 0) {
        resultArray.push(currentSubArray);
        currentSubArray = [];
      }
      resultArray.push(item.trim());
    }
  });
  if (currentSubArray.length > 0) {
    resultArray.push(currentSubArray);
  }
  return resultArray;
}

export const convertDateFormat = (inputDate) => {
  const parsedDate = new Date(inputDate);
  if (isNaN(parsedDate.getTime())) {
    return 'Invalid Date';
  }
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  const formattedDate = parsedDate.toLocaleDateString('en-US', options);
  return formattedDate;
}

export const countOccurrences = (arr) => {
  const occurrences = {};

  arr.forEach((number) => {
    occurrences[number] = (occurrences[number] || 0) + 1;
  });

  const result = Object.keys(occurrences).map((productId) => ({
    productId: parseInt(productId),
    qty: occurrences[productId],
  }));

  return result;
}









