import './Posts.css';

const posts = [
    {
      "title": "Post1",
      "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "author": "Agatha Christie",
      "date": '04.11.2023'
    },
    {
      "title": "Post2",
      "content": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      "author": "Barbara Cartland",
      "date": '02.07.2021'
    },
    {
      "title": "Post3",
      "content": " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.",
      "author": "Gilbert Patten",
      "date": '02.12.2020'
    },
    {
      "title": "Post4",
      "content": "Contrary to popular belief, Lorem Ipsum is not simply random text, Lorem Ipsum available.",
      "author": "Jackie Collins",
      "date": '05.06.2020'
    },
    {
      "title": "Post5",
      "content": "Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
      "author": "Paulo Coelho",
      "date": '07.10.2019'
    },
    {
      "title": "Post6",
      "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      "author": "James Patterson",
      "date": '03.03.2023'
    }
  ]

const Posts = () => {
    return ( 
       <div className="Posts">
        {posts.map(post => <div className="post">
                <h2 className="post__title">{ post.title }</h2>
                <div className="post__content">
                    <p className="post__text">{ post.content }</p>
                    <p className="post__author">{ post.author }</p>
                    <p className="post__date">{ post.date }</p>
                </div>
            </div>
            )}
    </div>
    )
  }

export default Posts;