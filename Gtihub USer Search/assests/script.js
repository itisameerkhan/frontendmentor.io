const search = document.getElementById('github-search');
const searchButton = document.getElementById('search-btn');
const errorMessage = document.getElementById('error-display');

/*github details*/
const name  = document.getElementById('name');
const username = document.getElementById('username');
const joined = document.getElementById('joined');
const profilePic = document.getElementById('profile-pic');
const bioDetails = document.getElementById('bio-details');
const repos = document.getElementById('repos-count');
const followerCount = document.getElementById('follower-count');
const followingCount = document.getElementById('following-count');
const locationData = document.getElementById('location');
const twitterData = document.getElementById('twitter');
const websiteLink = document.getElementById('website-link');
const companyData = document.getElementById('company');

searchButton.addEventListener('click', () => {
    fetchAPIFunction(search.value);
});

async function fetchAPIFunction(username)
{
    const response = await fetch(`https://api.github.com/users/${username}`);
    if(response.ok)
    {
        errorMessage.style.visibility = "hidden";
        search.style.borderColor = "transparent";
        const data = await response.json();

        name.innerHTML = data.name; //name
        username.innerHTML = '@' + data.login; //username

        const dateString = data.created_at;
        const dateOject = new Date(dateString);
        const year = dateOject.getFullYear();
        const month = dateOject.getMonth() + 1;
        const day = dateOject.getDate();
        const formattedDate = `joined ${year}/${month.toString().padStart(2,'0')}/${day.toString().padStart(2,'0')}`;
        joined.innerHTML = formattedDate;
        
        profilePic.setAttribute("src",data.avatar_url);

        if(data.bio === null)
        {
            bioDetails.innerHTML = 'This profile has no bio';
            bioDetails.style.opacity = "0.6";
        }
        else 
        {
            bioDetails.innerText = `${data.bio}`;
            bioDetails.style.opacity = "1";
        }

        repos.innerText = data.public_repos;
        followerCount.innerText = data.followers;
        followingCount.innerText = data.following;
        if(data.location === null)
        {
            locationData.innerText = 'Not Available';
            locationData.style.opacity = "0.6";
        }
        else 
        {
            locationData.innerText = data.location;
            locationData.style.opacity = "1";
        }
        if(data.twitter_username === null)
        {
            twitterData.innerText = 'Not Available';
            twitterData.style.opacity = "0.6";
        }
        else 
        {
            twitterData.innerText = data.twitter_username;
            twitterData.style.opacity = "1";
        }
        if(data.blog === null)
        {
            websiteLink.innerText = 'Not Available';
            websiteLink.style.opacity = "0.6";
        }
        else 
        {
            websiteLink.innerText = data.blog;
            websiteLink.style.opacity = "1";
        }
        if(data.company === null)
        {
            companyData.innerText = 'Not Available';
            companyData.style.opacity = "0.6";
        }
        else 
        {
            companyData.innerText = data.company;
            companyData.style.opacity = "1";
        }
    }
    else 
    {
        errorMessage.style.visibility = "visible";
        search.style.borderStyle = "dotted";
        search.style.borderColor = "red";
    }
}

fetchAPIFunction('ameerkhan123ak');