/*
 * Add query methods like this:
 *  Site.findPublic = function () {
 *    return Site.find({is_public: true});
 *  }
 */

var Schemas = {};



Site = new Meteor.Collection('site', {});


Schemas.Site = new SimpleSchema({
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    },
    denyUpdate: true
  },
  userId: {
    type: String,
    autoValue: function(){
      if (this.isInsert) {
        return this.userId;
      } else if (this.isUpsert) {
        return {$setOnInsert: this.userId};
      } else {
        this.unset();
      }
    },
    denyUpdate: true
  },
  // siteId: {
  //   type: String,
  //   label: "Site ID"
  // },
  domain: {
    type: String,
    label: "Domain",
    unique: true
  },
  siteTheme: {
    type: String,
    label: "Theme",
    allowedValues: ['0', '1', '2','3','Master'],
    autoform: {
      options: [
        {label: "Theme 0", value: "0"},
        {label: "Theme 1", value: "1"},
        {label: "Theme 2", value: "2"},
        {label: "Theme 3", value: "3"},
        {label: "ServiceBay", value: "Master"}
      ]
    }
  },
  siteLogo: {
    type: String,
    label: "Your Logo",
    optional: true,
  },
  siteTitle: {
    type: String,
    label: "Site Name",
    max: 255
  },
  homeIntro: {
    type: String,
    label: "Welcome introduction",
    optional: true,
    max: 5000,
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor', // optional
        // summernote options goes here
        toolbar: [
          ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
          ['font', ['strikethrough']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['insert', ['picture', 'link', 'video', 'table', 'hr']],
          ['misc', ['codeview']],
        ]
      }
    }
  },
  servicesIntro: {
    type: String,
    label: "About your services",
    optional: true,
    max: 5000,
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor', // optional
        // summernote options goes here
        toolbar: [
          ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
          ['font', ['strikethrough']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['insert', ['picture', 'link', 'video', 'table', 'hr']],
          ['misc', ['codeview']],
        ]
      }
    }
  },
  aboutIntro: {
    type: String,
    label: "Your company bio",
    optional: true,
    max: 5000,
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor', // optional
        // summernote options goes here
        toolbar: [
          ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
          ['font', ['strikethrough']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['insert', ['picture', 'link', 'video', 'table', 'hr']],
          ['misc', ['codeview']],
        ]
      }
    }
  },
  contactIntro: {
    type: String,
    label: "Contact details",
    optional: true,
    max: 5000,
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor', // optional
        // summernote options goes here
        toolbar: [
          ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
          ['font', ['strikethrough']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['insert', ['picture', 'link', 'video', 'table', 'hr']],
          ['misc', ['codeview']],
        ]
      }
    }
  },
  location: {
    type: String,
    label: "Location",
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'map',
        mapType: 'roadmap', //'roadmap' 'satellite' 'hybrid' 'terrain'
        zoom: 15,
        scrollwheel: false,
        searchBox: true,
        geolocation: 'true', // 'true', false
        width: '100%',
        height: '300px',
        //defaultLat: ,
        //defaultLng: ,
        // summernote options goes here
      }
    }
  },
  companyName: {
    type: String,
    label: "Business Name",
    max: 255,
    optional: true
  },
  companyAddress: {
    type: String,
    label: "Street Address",
    max: 255,
    optional: true
  },
  companyCity: {
    type: String,
    label: "City",
    max: 50,
    optional: true
  },
  companyState: {
    type: String,
    label: "Province / State",
    max: 50,
    optional: true
  },
  companyCountry: {
    type: String,
    label: "Country",
    allowedValues: ['Canada', 'USA'],
    autoform: {
      options: [
        {label: "Canada", value: "Canada"},
        {label: "United States", value: "USA"},
      ]
    }
  },
  companyPhone: {
    type: String,
    label: "Phone Number",
    max: 20,
    optional: true
  },
  companyFax: {
    type: String,
    label: "Fax Number",
    max: 20,
    optional: true
  },
  companyEmail: {
    type: String,
    label: "Contact Email Address",
    optional: true
  },
  companyFacebook: {
    type: String,
    label: "Facebook Page",
    optional: true
  },
  companyTwitter: {
    type: String,
    label: "Twitter I.D.",
    optional: true
  },
  companyYelp: {
    type: String,
    label: "Yelp Page",
    optional: true
  },
  homeSplash:{
    type: String,
    label: "Home Splash Image",
    optional: true,
  }
});

Site.attachSchema(Schemas.Site);