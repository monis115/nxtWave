import "./CreateItem.css";

const CreateItem = () => {
  return (
    <div className="create-item">
      <img className="create-item-child" alt="" src="/group-3@2x.png" />
      <div className="top-bar1">
        <div className="search-bar2">
          <div className="field2" />
          <img className="search-16px2" alt="" src="/search--16px.svg" />
          <div className="search2">Search</div>
        </div>
        <img className="persons-icon2" alt="" src="/persons@2x.png" />
        <div className="bottom-border1" />
        <div className="primary-left-icondefault2">
          <img className="plus-16px5" alt="" src="/plus--16px1.svg" />
          <div className="create">Add</div>
        </div>
      </div>
      <img
        className="nxtwave-tm-coloured-logo-1"
        alt=""
        src="/nxtwave-tm-coloured-logo-1.svg"
      />
      <div className="name">
        <div className="bg12" />
        <div className="text3">iB studio trainees</div>
        <div className="label3">Item TITLe</div>
      </div>
      <div className="name1">
        <div className="bg12" />
        <div className="text3">www.slack.iB studio trainees.com</div>
        <div className="label3">LInk</div>
      </div>
      <div className="name2">
        <div className="bg12" />
        <div className="text3">www.slack.iB studio trainees.com</div>
        <div className="label3">icon url</div>
      </div>
      <div className="input-labeldefault1">
        <div className="bg12" />
        <img className="check-1-16px1" alt="" src="/check-1--16px1.svg" />
        <div className="text6">Death Star Constrction</div>
        <div className="text3">slack</div>
        <div className="label3">CATEGORY</div>
      </div>
      <div className="select-labeldefault1">
        <div className="bg12" />
        <img
          className="chevron-down-16px1"
          alt=""
          src="/chevron-down--16px.svg"
        />
        <img className="check-16px1" alt="" src="/check--16px1.svg" />
        <div className="text7">Death Star Constrction</div>
        <div className="text3">User</div>
        <div className="label7">TAG NAME</div>
      </div>
      <div className="item-details">Item Details</div>
      <div className="textarea-labeldefault1">
        <div className="bg17" />
        <div className="text8">
          Maecenas sed diam eget risus varius blandit sit amet non magna
        </div>
        <div className="placeholder5">
          <p className="this-chaneel-is">
            This chaneel is for iB studio trainees
          </p>
          <p className="this-chaneel-is">team.</p>
        </div>
        <div className="label8">Descrition</div>
      </div>
      <div className="primarydefault1">
        <div className="create">CREATE</div>
      </div>
      <div className="breadcrumbs">
        <a href="/">
          {" "}
          <div className="users">Users</div>
          <img
            className="chevron-left-16px"
            alt=""
            src="/chevron-left--16px.svg"
          />
        </a>
      </div>
    </div>
  );
};

export default CreateItem;
