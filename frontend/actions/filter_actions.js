export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const UPDATE_STAR_FILTER = "UPDATE_STAR_FILTER";

export const updateBounds = (bounds) => {
  return({
    type: UPDATE_BOUNDS,
    bounds
  });
};

export const updateLocation = (coords, location) => ({
  type: UPDATE_LOCATION,
  coords,
  location
});

export const updateStarFilter = (starValue) => ({
  type: UPDATE_STAR_FILTER,
  starValue
});
