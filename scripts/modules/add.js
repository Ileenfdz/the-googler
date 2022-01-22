const parent = document.getElementById('card');

export function add(){
    // console.log("connected to add");
    let titleValue = document.getElementById('inputTitle').value;
    let hashtagValue = document.getElementById('inputHashtag').value;
    let descriptionValue = document.getElementById('inputDescription').value;

    let div = document.createElement('div');
    div.className= 'card-container';
    
    let divCard = document.createElement('div');
    divCard.className= 'card-divs';

    let title =document.createElement('p');
    title.innerHTML = titleValue;
    let divTitle= document.createElement('div');
    divTitle.className= 'card-div-title';

    let hashtag= document.createElement('p');
    hashtag.innerHTML = hashtagValue;
    let divHashtag= document.createElement('div');
    divHashtag.className= 'card-div-hashtag';

    let description = document.createElement('p');
    description.innerHTML = descriptionValue;
    let divDescription = document.createElement('div');
    divDescription.className= 'card-div-description';
    

    parent.appendChild(div);
    div.appendChild(divCard);

    divCard.appendChild(divTitle);
    divTitle.appendChild(title);

    divCard.appendChild(divHashtag);
    divHashtag.appendChild(hashtag);

    divCard.appendChild(divDescription);
    divDescription.appendChild(description);
}