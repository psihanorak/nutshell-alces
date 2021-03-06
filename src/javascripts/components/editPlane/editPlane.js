import planesData from '../../helpers/data/planesData';
import utils from '../../helpers/utils';

const editPlaneForm = (planeId) => {
  planesData.getPlaneById(planeId)
    .then((response) => {
      const plane = response.data;

      const domString = `
                          <h2> Edit Plane</h2>
                          <form>
                            <div id="${planeId}" class="edit-plane">
                              <label for="plane-image">Name:</label>
                              <input type="imageUrl" class="form-control" id="edit-plane-image" placeholder="Image Url" value=${plane.imageUrl}>
                            </div>
                            <div class="form-group">
                              <label for="plane-name">Name:</label>
                              <input type="text" class="form-control" id="edit-plane-name" placeholder="Name of Plane" value=${plane.name}>
                            </div>
                            <div class="form-group">
                              <label for="plane-type">Type:</label>
                              <input type="text" class="form-control" id="edit-plane-type" placeholder="Type of Plane" value=${plane.type}>
                            </div>
                            <button type="submit" class="btn btn-primary" id="edit-plane">Submit</button>
                          </form>
                        `;
      utils.printToDom('#change-plane', domString);
    })
    .catch((err) => console.error('getPlaneForm failed', err));
};

export default { editPlaneForm };
