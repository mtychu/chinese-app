/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFlashcard = /* GraphQL */ `
  subscription OnCreateFlashcard {
    onCreateFlashcard {
      id
      level
      chineseTrad
      chineseSimp
      meanings
      meaningMnemonic
      meaningHint
      reading
      readingMnemonic
      readingHint
      examples
      prereqs
      unlocks
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFlashcard = /* GraphQL */ `
  subscription OnUpdateFlashcard {
    onUpdateFlashcard {
      id
      level
      chineseTrad
      chineseSimp
      meanings
      meaningMnemonic
      meaningHint
      reading
      readingMnemonic
      readingHint
      examples
      prereqs
      unlocks
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFlashcard = /* GraphQL */ `
  subscription OnDeleteFlashcard {
    onDeleteFlashcard {
      id
      level
      chineseTrad
      chineseSimp
      meanings
      meaningMnemonic
      meaningHint
      reading
      readingMnemonic
      readingHint
      examples
      prereqs
      unlocks
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      displayName
      firstName
      lastName
      email
      progress
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      displayName
      firstName
      lastName
      email
      progress
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      displayName
      firstName
      lastName
      email
      progress
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
