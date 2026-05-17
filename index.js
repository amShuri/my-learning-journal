import { posts } from './posts.js'

const recentPostList = document.getElementById('recent-post-list')
const viewMoreBtn = document.getElementById('view-more')
let showAllPosts = false

if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
        showAllPosts = !showAllPosts
        viewMoreBtn.textContent = showAllPosts ? 'View Less' : 'View More'
        render(showAllPosts ? posts.length : 3)
    })
}

function getPostHtml(postCount) {
    const displayedPosts = posts.slice(0, postCount)
    return displayedPosts.map((post) => {
        const { title, date, displayDate, img, alt, description }  = post;
        return `
        <article class="recent-post-body">
            <img
                src="${img}"
                alt="${alt}"
                loading="lazy"
                class="recent-post-img">
            <time datetime="${date}">${displayDate}</time>
            <h2>${title}</h2>
            <p>${description}</p>
        </article>
        `
    }).join("")
}

function render(postCount = 3) {
    recentPostList.innerHTML = getPostHtml(postCount)
}

render()