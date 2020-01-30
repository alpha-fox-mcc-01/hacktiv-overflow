require('./config/connect').config()

const Post = require('./models/post')

Post.findOne({ _id: '5e327ab6247eb3608fd875f8' })
  .then(post => {
    console.log(post);

    // const newDownvoters = post.downvoters.filter(person => person != votersId)
    // console.log('downvoters', post.downvoters)
    // console.log('new downvoters', newDownvoters)
    Post.updateOne({ _id: '5e327ab6247eb3608fd875f8' }, { $pull: { downvoters: '5e327b16247eb3608fd875f9' } })
      .then(success => {
        console.log(success)
      })
      .catch(err => {
        console.log(err)
      })

  })
  .catch(err => {
    console.log(err)
  })