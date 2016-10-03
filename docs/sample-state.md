{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createReview: {errors: []}
    newloo: {errors: ["city can't be blank"]}
  },

  loos: {
    1: {
      name: "Gregory's Coffee",
      address: "141 essex street",
      city: "New York",
      postal_code: "10003",
      lat: 403.43,
      lng: 302.22,
      category: "Coffee Shop",
      hours: "MTWRF 9:00AM - 11:00PM",
      hand_access: true,
      reviews: 3.0,
      review_count: 3,
      }
    }
  }
  reviews: {
    1: {
      user_id: 10,
      loo_id: 4,
      body: "This loo was disgusting!",
      rating: 1
    },

    20: {
      user_id: 3,
      loo_id: 4,
      body: "This loo was amazing!",
      rating: 5
    },

    50: {
      user_id: 20,
      loo_id: 4,
      body: "This loo was ok",
      rating: 3
    }
  }
}
