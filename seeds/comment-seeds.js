const { Comment } = require('../models');

const commentSeeds = [
  {
    comment_body: 'Nunc rhoncus dui vel sem.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_body: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_body: 'Aliquam erat volutpat. In congue.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_body: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    post_id: 18
  },
  {
    comment_body: 'In hac habitasse platea dictumst.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_body: 'Vivamus vestibulum sagittis sapien.',
    user_id: 1,
    post_id: 20
  },
  {
    comment_body: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 6,
    post_id: 7
  },
  {
    comment_body: 'Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_body: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 6,
    post_id: 12
  },
  {
    comment_body: 'Morbi a ipsum.',
    user_id: 6,
    post_id: 20
  },
  {
    comment_body: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    post_id: 14
  },
  {
    comment_body: 'Donec ut mauris eget massa tempor convallis.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_body:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 4,
    post_id: 9
  },
  {
    comment_body:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 14
  },
  {
    comment_body: 'Quisque porta volutpat erat.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_body: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_body:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 2,
    post_id: 20
  },
  {
    comment_body: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    user_id: 4,
    post_id: 11
  },
  {
    comment_body:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 5,
    post_id: 13
  },
  {
    comment_body:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    user_id: 9,
    post_id: 16
  },
  {
    comment_body: 'Curabitur convallis.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_body: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_body: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_body:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 8,
    post_id: 10
  },
  {
    comment_body:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_body: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_body: 'Nam tristique tortor eu pede.',
    user_id: 4,
    post_id: 16
  },
  {
    comment_body: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    user_id: 4,
    post_id: 18
  },
  {
    comment_body: 'Proin eu mi. Nulla ac enim.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_body: 'Sed ante. Vivamus tortor.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_body: 'Aliquam quis turpis eget elit sodales scelerisque.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_body: 'Donec quis orci eget orci vehicula condimentum.',
    user_id: 3,
    post_id: 19
  },
  {
    comment_body: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_body: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_body: 'Maecenas ut massa quis augue luctus tincidunt.',
    user_id: 10,
    post_id: 8
  },
  {
    comment_body: 'Cras in purus eu magna vulputate luctus.',
    user_id: 10,
    post_id: 11
  },
  {
    comment_body: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 8,
    post_id: 5
  },
  {
    comment_body: 'Proin at turpis a pede posuere nonummy.',
    user_id: 8,
    post_id: 19
  },
  {
    comment_body: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    user_id: 9,
    post_id: 19
  },
  {
    comment_body:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_body:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    user_id: 2,
    post_id: 11
  },
  {
    comment_body: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_body: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 9,
    post_id: 6
  },
  {
    comment_body:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    user_id: 7,
    post_id: 9
  },
  {
    comment_body: 'Integer ac leo. Pellentesque ultrices mattis odio.',
    user_id: 4,
    post_id: 19
  },
  {
    comment_body: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_body:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 2,
    post_id: 19
  },
  {
    comment_body: 'Proin risus. Praesent lectus.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    user_id: 10,
    post_id: 12
  }
];

const comments = () => Comment.bulkCreate(commentSeeds);

module.exports = comments;