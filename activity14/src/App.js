import React, { Component } from "react";

const styles = {
  body: {
    backgroundColor: 'gray',
  },
  title: {
    color: 'gold',
    textAlign: 'center',
  },
  container: {
    backgroundColor: 'antiquewhite',
    borderRadius: '10px',
    border: '3px solid black',
    marginLeft: '15%',
    marginRight: '15%',
    marginBottom: '2%',
    padding: '20px',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gridGap: '20px',
  },
  textContent: {
    gridColumn: '0 1',
  },
  image: {
    gridColumn: '2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageImg: {
    maxWidth: '100%',
    height: 'auto',
  },
  vote: {
    display: 'flex',
    justifyContent: 'center',
    gridColumn: 'span 2',
  },
  button: {
    paddingLeft: '10px',
    paddingRight: '10px',
    margin: '20px',
  },
  count: {
    backgroundColor: 'greenyellow',
    color: 'blueviolet',
    paddingLeft: '10px',
    paddingRight: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    border: '3px solid black',
  },
};

Object.assign(document.body.style, styles.body);

class Container extends Component {
  state = {
    count: 0,
  };

  handleVote = () => {
    const { count } = this.state;
    if (count === 10) {
      alert("Cannot vote more");
    } else {
      this.setState((prevState) => ({
        count: Math.min(prevState.count + 1, 10),
      }));
    }
  };

  handleUnvote = () => {
    const { count } = this.state;
    if (count === 0) {
      alert("Cannot unvote");
    } else {
      this.setState((prevState) => ({
        count: Math.max(prevState.count - 1, 0),
      }));
    }
  };

  render() {
    const { count } = this.state;
    let display;
    if (count === 0) {
      display = "MIN";
    } else if (count === 10) {
      display = "MAX";
    } else {
      display = count;
    }

    return (
      <div style={styles.container}>
        <div style={styles.textContent}>
          <h2 style={styles.textContent}>{this.props.header}</h2>
          <h3 style={styles.textContent}>{this.props.subheader}</h3>
          <p style={styles.textContent}>{this.props.info}</p>
        </div>
        <div style={styles.image}>
          <img style={styles.imageImg} src={this.props.url} alt="" />
        </div>
        <div style={styles.vote}>
          <button style={styles.button} onClick={this.handleVote}>
            Click to Vote
          </button>
          <span style={styles.count}>
            <h1>{display}</h1>
          </span>
          <button style={styles.button} onClick={this.handleUnvote}>
            Click to Unvote
          </button>
        </div>
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <h1 style={styles.title}>FOOD VOTE</h1>
        <Container
          header="Main Dish"
          url="https://embed.widencdn.net/img/beef/fnc5ompwcp/960x720px/steppin-up-beef-fried-rice-square.tif?keep=c&u=7fueml"
          subheader="Fried Rice"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam pellentesque nulla, non luctus tellus volutpat vitae. Etiam vel velit sit amet lectus feugiat maximus. In fermentum a purus nec pretium. Nulla tempus magna arcu, eu elementum nibh sollicitudin id. Integer semper, neque eu molestie fringilla, lorem sem malesuada ex, bibendum pretium justo est eget nisi. Sed suscipit mattis nisl, consectetur tincidunt magna. Nam vitae lacinia odio, ut fringilla enim. Integer pharetra sed sem at elementum. Aliquam vel quam laoreet, tempus ipsum a, mattis lorem."
        />
        <Container
          header="Dessert"
          url="https://www.allrecipes.com/thmb/K9Ea4w7sUDgfgMfRLbLopR7oxok=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/50050-five-minute-ice-cream-DDMFS-4x3-076-fbf49ca6248e4dceb3f43a4f02823dd9.jpg"
          subheader="Ice Cream"
          info="Ut tempus orci ut risus sagittis, at luctus justo efficitur. Vivamus vitae malesuada felis, vitae lobortis nibh. Aenean ligula magna, fringilla ut finibus non, ultricies nec ex. Suspendisse tristique enim ut enim fringilla imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis facilisis augue eu tempor."
        />
        <Container
          header="Main Dish"
          url="https://w0.peakpx.com/wallpaper/357/945/HD-wallpaper-steaks-meal-graphy-food-steak-beef-steak-repast-square-meal-comestible.jpg"
          subheader="Steak"
          info="Etiam ac ex massa. Nullam ante risus, aliquam vitae eleifend iaculis, ornare a neque. Nulla pretium dapibus odio eu viverra. Quisque scelerisque sem et leo luctus, in ullamcorper elit fringilla. Ut id nisl euismod, feugiat velit ac, aliquam nibh. Cras at arcu lectus. Morbi vitae mattis odio. Curabitur a placerat dolor. Nulla ut velit vitae diam bibendum iaculis vel a magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In vitae orci semper, auctor dolor molestie, sodales mi. Pellentesque eget consectetur eros, sed dictum orci."
        />
        <Container
          header="Dessert"
          url="https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice.jpg"
          subheader="Chocolate Cake"
          info="Quisque id eleifend dui. Donec et sem arcu. Duis vel dictum est. Pellentesque eu eros vehicula mi egestas sollicitudin. Nulla hendrerit pharetra libero ac lacinia. Etiam aliquet est at velit sollicitudin, nec viverra leo laoreet. Mauris tempus tortor quis pellentesque viverra. Vivamus ullamcorper purus lorem, nec lacinia magna pellentesque nec. Morbi vehicula tellus feugiat, condimentum felis eu, imperdiet est. Nunc bibendum nisi sagittis mi faucibus tempus. Duis nec nunc tristique, pulvinar tortor rutrum, ultrices risus. In commodo accumsan nunc, non vestibulum dui hendrerit id. Vestibulum tincidunt, augue porta aliquet pharetra, dolor urna ullamcorper enim, eget accumsan libero libero quis felis. Aenean diam ipsum, lacinia ac libero et, eleifend tempor arcu. Nullam commodo elementum lectus sit amet faucibus. Nulla commodo laoreet tellus, ullamcorper feugiat orci fermentum in."
        />
      </div>
    );
  }
}

export default Main;
