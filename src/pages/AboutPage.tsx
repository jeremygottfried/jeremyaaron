import React, { FC, ReactElement } from 'react';
import TextPageWrapper from 'components/TextPageWrapper';

const AboutPage: FC = (): ReactElement => (
  <TextPageWrapper>
  <div className="py-2">
    <h1>Bio</h1>
    <hr className=" mb-4 solid" />
  </div>
  <div className="text-left p-4">
    <p>
      Jeremy Aaron is a NYC singer, storyteller, community organizer, bluesman, poet, guitarist, violinist, and the
      creator of Greenwich Village Showcase. Warm and real, his music evokes nights around the campfire between old
      friends. You may come to his shows to hear the earthy folk chords, the living room intimacy, the confessional
      lyrics. You may leave inspired. His songs tell of Ecuadorian shadows, magic lights, Adirondack evergreens,
      beggars’ coins, train tracks, and road trips. His music is special, intimate, contemplative, poetic, personal,
      lyrical, meaningful. His songs are comforting like hot chocolate, wool socks, and your crackling fireplace on a
      winter’s day.
    </p>
    <br/>
    <p>
      In addition to performing his own songs, Jeremy performs as part of many other projects.
      He currently performs as guitarist and vocalist in the rock band The Permanent Revolution.
      He frequently plays fiddle with singer/songwriters Johanna Wacker and Isaac Gut.
      He has performed as old time fiddler in many projects, most recently Broken Rail.
      He was the fiddler, guitarist, and backing vocals in Spuyten Duyvil since 2016.
      He has toured as fiddler and vocalist with Gangstagrass.
      He has played on the albums of many artists, including Dark Tea, Gawain and The Green Knight, Rowan Rain, Kosi, Judy Kass, Deer Scout, and Phil Lewin.
      Jeremy has played fiddle backing many other artists, including Francis Falls, David Amram, Mattson, Kirsten
      Maxwell, Joe Crookston, Bakithi Kumalo, and Jann Klose.
    </p>
    <br/>
    <p>
      Jeremy was raised in Nyack, NY, where he studied classical violin with Alicia Edelberg, Associate Concertmaster
      for the NYC Opera. He grew up attending Jay Ungar’s “Ashokan Fiddle and Dance Camp” where he was taught his first
      fiddle tunes by Jay Ungar, David Kaynor and John Krumm and his first chords on the guitar by folksinger Sally
      Rogers and Molly Mason. Canadian songwriter friend and mentor Philip Lewin encouraged Jeremy to begin writing
      songs as a teenager. After earning an undergraduate degree at Oberlin College, Jeremy began pursuing music and
      songwriting full time.
    </p>
    <br/>
    <p>
    Jeremy Aaron created the Greenwich Village Showcase to make his dream of a communal music space for NYC singer/songwriters come true.
    Each month at Caffe Vivaldi, the showcase brought together aspiring singer/songwriters to continue the spirit of folk music.
    Many musicians who are now well known in the folk scene played at the showcase when they were first starting.
    Regulars at the showcase included Kirsten Maxwell, Joshua Garcia, Sophie Buskin,
    Jake Blount, Tara Dente, Dan Whitener, Rupert Wates, Eric Lee, Belle-Skinner, Francis Falls, Moha Ngom,
    Mary-Elaine Jenkins, Kate Copeland, Pinkie Promise, Katie Martucci, Skye Steele, Rachael Kilgour, Henry Black.
    Many of these artists now perform at Jeremy's new concert series, Voices In The Heights, which he runs with his dad.

    </p>
    </div>
  </TextPageWrapper>
);

export default AboutPage;
