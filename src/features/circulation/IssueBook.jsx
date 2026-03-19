
import "./circulation.css";

function  IssueBook () {
 
    return (
      <>
      <div class="issue-card">
  <div class="header">
    <h3>Issue a Book</h3>
    <p>This is a demo-only circulation flow. Inventory sync can be added later.</p>
  </div>

  <div class="form-grid">
    <div class="form-group">
      <label>Select Member</label>
      <select><option>Choose an active member...</option></select>
    </div>
    <div class="form-group">
      <label>Select Book</label>
      <select><option>Choose an available book...</option></select>
    </div>

    <div class="form-group">
      <label>Issue Date</label>
      <input type="text" value="19 - 03 - 2026" />
    </div>
    <div class="form-group">
      <label>Due Date</label>
      <input type="text" value="02 - 04 - 2026" />
    </div>

    <div class="form-group full-width">
      <label>Remarks</label>
      <textarea rows="3"></textarea>
    </div>
  </div>

  <button class="issue-btn">+ Issue Book</button>
</div>
      </>
    )
  }


export default IssueBook;
