/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFlashcard = /* GraphQL */ `
  query GetFlashcard($id: ID!) {
    getFlashcard(id: $id) {
      id
      level
      chineseTrad
      chineseSimp
      meanings
      meaningMnemonic
      meaningHint
      readings
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
export const listFlashcards = /* GraphQL */ `
  query ListFlashcards(
    $id: ID
    $filter: ModelFlashcardFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFlashcards(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        level
        chineseTrad
        chineseSimp
        meanings
        meaningMnemonic
        meaningHint
        readings
        readingMnemonic
        readingHint
        examples
        prereqs
        unlocks
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      displayName
      firstName
      lastName
      email
      progress {
        flashcardId
        progress
        nextReview
        userMeaning
        userNotes
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        displayName
        firstName
        lastName
        email
        progress {
          flashcardId
          progress
          nextReview
          userMeaning
          userNotes
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
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
export const listBlogs = /* GraphQL */ `
  query ListBlogs($filter: ModelBlogFilterInput, $limit: Int, $nextToken: String) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        content
        createdAt
        updatedAt
        postCommentsId
      }
      nextToken
    }
  }
`;
export const getFlashcardByLevel = /* GraphQL */ `
  query GetFlashcardByLevel(
    $level: String!
    $sortDirection: ModelSortDirection
    $filter: ModelFlashcardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getFlashcardByLevel(
      level: $level
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        level
        chineseTrad
        chineseSimp
        meanings
        meaningMnemonic
        meaningHint
        readings
        readingMnemonic
        readingHint
        examples
        prereqs
        unlocks
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFlashcardByChineseTrad = /* GraphQL */ `
  query GetFlashcardByChineseTrad(
    $chineseTrad: String!
    $sortDirection: ModelSortDirection
    $filter: ModelFlashcardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getFlashcardByChineseTrad(
      chineseTrad: $chineseTrad
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        level
        chineseTrad
        chineseSimp
        meanings
        meaningMnemonic
        meaningHint
        readings
        readingMnemonic
        readingHint
        examples
        prereqs
        unlocks
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFlashcardByChineseSimp = /* GraphQL */ `
  query GetFlashcardByChineseSimp(
    $chineseSimp: String!
    $sortDirection: ModelSortDirection
    $filter: ModelFlashcardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getFlashcardByChineseSimp(
      chineseSimp: $chineseSimp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        level
        chineseTrad
        chineseSimp
        meanings
        meaningMnemonic
        meaningHint
        readings
        readingMnemonic
        readingHint
        examples
        prereqs
        unlocks
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
