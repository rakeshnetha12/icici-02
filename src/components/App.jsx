import '../stylesheets/App.css';
import './app.css'
function App() {
  return (
    <div className="App">
      <div class="form_bg">
        <div class="form-row">
            <div class="col-md-4 mb-4">
            <label for="validationDefault03">Type of Request <span class="tx-red"> * </span></label>
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>What's New @ ICICI Bank</option>
                <option value="1">Low</option>
                <option value="2">High</option>
                <option value="3">Other</option>
              </select>
          </div>
          <div class="col-md-4 mb-4">
            <label for="validationDefault02">Date of Request <span class="tx-red"> * </span></label>
            <input type="date" class="form-control" id="reportdate" name="reportdate" />
          </div>
          <div class="col-md-4 mb-4">
            <label for="validationDefault02">Publish Date <span class="tx-red"> * </span></label>
            <input type="date" class="form-control" id="reportdate" name="reportdate" />
          </div>
          
        </div>
        <div class="form-row">
            <div class="col-md-4 mb-4">
                <label for="validationDefault03">Priority <span class="tx-red"> * </span></label>
                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Choose...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                    <option value="3">6</option>
                    <option value="3">7</option>
                    <option value="3">8</option>
              </select>
            </div>
          <div class="col-md-4 mb-4">
            <label for="validationDefault03">Business Group <span class="tx-red"> * </span></label>
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Choose...</option>
                <option value="1">Low</option>
                <option value="2">High</option>
                <option value="3">Other</option>
              </select>
          </div>
          <div class="col-md-4 mb-4">
            <label for="validationDefault03">Requester Name <span class="tx-red"> * </span></label>
            <input type="text" class="form-control" placeholder="Requester Name" />
          </div>
        </div>

        <div class="form-row">
            <div class="col-md-4 mb-4">
            <label for="validationDefault03">Requester Employee ID <span class="tx-red"> * </span></label>
            <input type="text" class="form-control" placeholder="Requester Employee ID" />
          </div>
          <div class="col-md-4 mb-4">
            <label for="validationDefault03">Approver Name <span class="tx-red"> * </span></label>
            <input type="text" class="form-control" placeholder="Approver Name" />
          </div>
          <div class="col-md-4 mb-4">
            <label for="validationDefault03">Approver Employee ID<span class="tx-red"> * </span></label>
            <input type="text" class="form-control" placeholder="Approver Employee ID" />
          </div>
        </div>

        <div class="form-row">
            <div class="col-md-8 mb-8">
            <label for="validationDefault03">Title (max 100 characters)D <span class="tx-red"> * </span></label>
            <textarea type="text" class="form-control" placeholder="Title (max 100 characters)" style={{width:"100%"}}></textarea>
          </div>
          <div class="col-md-2 mb-2">
            <label for="validationDefault03">Request Category <span class="tx-red"> * </span></label>
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Choose...</option>
                <option value="1">Events</option>
                <option value="2">Product and feature launches</option>
                <option value="3">Offers</option>
                <option value="3">Contests</option>
                <option value="3">Campaign</option>
                <option value="3">Award & Recognition</option>
                <option value="3">Internal Newsletter</option>
                <option value="3">IamICICI</option>
                <option value="3">ICICI Foundation</option>
                <option value="3">Authored articles by Senior Management</option>
                <option value="3">Others (provide text field)</option>
              </select>
          </div>
          <div class="col-md-2 mb-2">
            <label for="validationDefault03">Purpose <span class="tx-red"> * </span></label>
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Choose...</option>
                <option value="1">Awareness</option>
                <option value="2">Knowledge</option>
                <option value="3">Engagement</option>
              </select>
          </div>
        </div>

        <div class="form-row mt-3">
            <div class="col-md-4 mb-4">
                <label for="validationDefault03">Target Group <span class="tx-red"> * </span></label>
                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Choose...</option>
                    <option value="1">Business Group</option>
                    <option value="2">Location</option>
                    <option value="3">Add Distribution List</option>
              </select>
            </div>
          <div class="col-md-8 mb-8">
            <label for="validationDefault03">Supporting media <span class="tx-red"> * </span></label>
            <input type="file" class="form-control" id="myFile" name="filename2" multiple />
          </div>
        </div>
        
        <div class="form-row">
            <div class="col-md-12">
              <label for="validationDefault03">Description  <span class="tx-red"> * </span></label>
              <textarea type="text" class="form-control" placeholder="Description " style={{width:"100", height:"100px"}}></textarea>
            </div>
        </div>
        
        <button class="btn icici_color border-rds-2" type="submit">Save Announcement</button>
      </div> 
    </div>
  );
}

export default App;

