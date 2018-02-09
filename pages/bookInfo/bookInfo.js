const app = getApp()

Page({

  data:
    {
      state: {
        storyLoading: false,
        storyLoaded: false,
      },

      id: "0",
      type: "BOOK",
      surtitle: "童话故事",
      title: "The Matchstick Girl",
      shortDescription: "卖火柴的小女孩",
      fullDescription: "The Little Matchstick Girl is a short story by Danish poet and author Hans Christian Andersen. The story, about a dying child's dreams and hope, was first published in 1845.",
      fullDescriptionNodes: [
        {
          name: 'div',
          attrs: {
            style: 'padding: 25px',
          },
          children: [
            {
              name: 'h3',
              children: [
                {
                  type: 'text',
                  text: 'A Christmas Story',
                },
              ],
            },
            {
              name: 'p',
              attrs: {
                style: 'padding-top: 10px; font-size: 0.8em; color: gray',
              },
              children: [
                {
                  type: 'text',
                  text: `On a cold New Year's Eve, a poor, young girl tries to sell matches in the street. She is already shivering from cold and early hypothermia, and she is walking barefoot having lost her two large slippers. Still, she is too afraid to go home, because her father will beat her for not selling any matches, and also as the many cracks in their shack can't keep out the cold wind. The girl takes shelter in a nook or alley and sits down.`,
                }
              ]
            }
          ],
        }
      ],
      link: "/hello_world",
      imgUrl: "./matchstick.png",
      displaySettings: {
        colorSchemeTop: "light",
        colorSchemeBottom: "light",
        underlayTop: "underlayOff",
        underlayBottom: "underlayOff",
      }
  },
  startStory: function(e) {
    this.setData({
      state: {...this.state, storyLoading: true},
    });
  }
});
