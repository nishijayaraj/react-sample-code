export function getImageUrl(person, size = 's') {
    const url = 'https://i.imgur.com/' +
                 person.imageId +
                 size +
                 '.jpg';
    return url;             
}