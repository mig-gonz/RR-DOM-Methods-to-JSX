let koalaContainer = (
  <div className="ui items">
    {koalas.map((koala) => (
      <div className="item" style={{ cursor: "pointer" }}>
        <div className="image">
          <img src={koala.imageURL} />
        </div>
        <div className="content">
          <h1 className="header">{koala.name}</h1>
          <div className="description">
            <p>{koala.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

document.body.append(koalaContainer);
