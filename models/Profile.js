const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  // handle: {
  //   type: String,
  //   required: true,
  //   max: 40
  // },
  faculty: {
    type: String
  },
  major: {
    type: String
  },
  second_major: {
    type: String
  },
  minor: {
    type: String
  },
  year: {
    type: String
  },
  bio: {
    type: String
  },
  // experience: [
  //   {
  //     title: {
  //       type: String,
  //       reuired: true
  //     },
  //     company: {
  //       type: String,
  //       required: true
  //     },
  //     location: {
  //       type: String
  //     },
  //     term: {
  //       type: Number
  //     },
  //     from: {
  //       type: Date,
  //       required: true
  //     },
  //     to: {
  //       type: Date
  //     },
  //     current: {
  //       type: Boolean,
  //       default: false
  //     },
  //     description: {
  //       type: String
  //     }
  //   }
  // ],

  // education: [
  //   {
  //     school: {
  //       type: String,
  //       reuired: true
  //     },
  //     degree: {
  //       type: String,
  //       required: true
  //     },
  //     fieldofstudy: {
  //       type: String,
  //       required: true
  //     },
  //     year: {
  //       type: Number
  //     },
  //     from: {
  //       type: Date,
  //       required: true
  //     },
  //     to: {
  //       type: Date
  //     },
  //     current: {
  //       type: Boolean,
  //       default: false
  //     },
  //     description: {
  //       type: String
  //     }
  //   }
  // ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    },
    github: {
      type: String
    },
    behance: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
