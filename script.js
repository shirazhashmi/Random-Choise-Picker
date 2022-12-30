const tagsEL = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()!== '').map(tag => tag.trim())

    tagsEL.innerHTML = ''

    tags.forEach(tag => {
        const tagEL = document.createElement('span')
        tagEL.classList.add('tag')
        tagEL.innerHTML = tag 
        tagsEL.appendChild(tagEL)
    })
    
}