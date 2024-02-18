test('spying on a method of an object ', () => {
    const video = {
        play() {
            return true;
        }

    }
    const spy = jest.spyOn(video, 'play');//to track calls to a video
    video.play();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore(); //restore the original implementation of that func
})