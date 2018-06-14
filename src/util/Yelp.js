const apiKey = '27CQsc0b-DU_Da-0bptaapkmmynxja5ZKvL29HH0e7SRuAuum5eUHqPsNm8zQgW5E7bHFOaftYxTiDo_IeL4tfJEzF_k0q9URYeft6ede3AHiWsRicaov2EUzYwiW3Yx';

//obj will store the functionality needed to interact with the yelp API
const Yelp = {
  search (term, location, sortBy) {
    //returns a promise that will resolve to our list of businesses
    return
    //first arguement is the /businesses endpoint of the Yelp API
    //second arguement is object with key of headers b/c Yelp requires
    //authorization, so it is presented by using the API key as a browser header
 fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
      //chain a .then to convert returned response to JSON so we can use the list of businesses
      //second .then is to retrieve the list of businesss from the converted response
    ).then(response => {
      return response.json();
    }).then(jsonResponse => {
      //check to see if it has a businesses key, like a valid response was returned
      if(jsonResponse.businesses){
        //iterate through jsonResponse.businesses to return an array with all the business' properties we need, the ones we already hard coded
        return jsonResponse.businesses.map(business => ({
          //returning an obj. that contains all the attributes needed to display a business in Ravenous
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
