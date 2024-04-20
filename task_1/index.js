import {encoded, translations} from './data.js'

console.log("Let's rock")


let translationsEntries = Object.entries(translations);
console.log(translationsEntries)
let decoded = encoded.map( (itemQ) => {
    let areaId =null;
    let departmentId=null;
    let directionId=null;
    let mediaTypeId=null;
    let mediaId=null;
    let resellingId=null;
    let serviceTypeId=null;
    let formatTypeId=null;
    let formatId=null;
    let unitId=null;
    let platformId=null;
    let budgetId=null;
    let adPlatformId=null;
    let service=null;
    let formatSize=null;
    let ca=null;
    let mpmId=null;
    translationsEntries.forEach( (itemW) => {
        if (itemQ.areaId==itemW[0]) {areaId = itemW[1]} 
        if (itemQ.departmentId==itemW[0]) departmentId = itemW[1]
        if (itemQ.directionId==itemW[0]) directionId = itemW[1]
        if (itemQ.mediaTypeId==itemW[0]) mediaTypeId = itemW[1] 
        if (itemQ.mediaId==itemW[0]) mediaId = itemW[1] 
        if (itemQ.resellingId==itemW[0]) resellingId = itemW[1]
        if (itemQ.serviceTypeId==itemW[0]) serviceTypeId = itemW[1]
        if (itemQ.formatTypeId==itemW[0]) formatTypeId = itemW[1]
        if (itemQ.formatId==itemW[0]) formatId = itemW[1]
        if (itemQ.unitId==itemW[0]) unitId = itemW[1]
        if (itemQ.platformId==itemW[0]) platformId = itemW[1]
        if (itemQ.budgetId==itemW[0]) budgetId = itemW[1]
        if (itemQ.adPlatformId==itemW[0]) adPlatformId = itemW[1]
        if (itemQ.service==itemW[0]) service = itemW[1]
        if (itemQ.formatSize==itemW[0]) formatSize = itemW[1] 
        if (itemQ.ca==itemW[0]) ca = itemW[1] 
        if (itemQ.mpmId==itemW[0]) mpmId = itemW[1] 
    })
    return {
        groupId: itemQ.groupId,
    
        areaId: areaId,
        departmentId: departmentId,
        directionId: directionId,
        mediaTypeId: mediaTypeId,
        mediaId: mediaId,
        resellingId: resellingId,
        serviceTypeId: serviceTypeId,
        formatTypeId: formatTypeId,
        formatId: formatId,
        unitId: unitId,
        platformId: platformId,
        budgetId: budgetId,
        adPlatformId: adPlatformId,
        service: service,
        formatSize: formatSize,
        ca: ca,
        mpmId: mpmId,
      }
})

console.log(decoded)
