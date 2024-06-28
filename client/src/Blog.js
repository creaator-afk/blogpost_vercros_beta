import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
];
const post1 = "# Sample blog post\n" +
    "\n" +
    "_April 1, 2020 by [Olivier](/)_\n" +
    "\n" +
    "This blog post shows a few different types of content that are supported and styled with\n" +
    "Material styles. Basic typography, images, and code are all supported.\n" +
    "You can extend these by modifying `Markdown.js`.\n" +
    "\n" +
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
    "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\n" +
    "Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\n" +
    "\n" +
    "Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.\n" +
    "Nullam id dolor id nibh ultricies vehicula ut id elit.\n" +
    "\n" +
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\n" +
    "Aenean lacinia bibendum nulla sed consectetur.\n" +
    "\n" +
    "## Heading\n" +
    "\n" +
    "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\n" +
    "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\n" +
    "Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n" +
    "\n" +
    "### Sub-heading 1\n" +
    "\n" +
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
    "\n" +
    "### Sub-heading 2\n" +
    "\n" +
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
    "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.\n" +
    "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo\n" +
    "sit amet risus.\n" +
    "\n" +
    "- Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n" +
    "- Donec id elit non mi porta gravida at eget metus.\n" +
    "- Nulla vitae elit libero, a pharetra augue.\n" +
    "\n" +
    "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.\n" +
    "\n" +
    "1. Vestibulum id ligula porta felis euismod semper.\n" +
    "1. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
    "1. Maecenas sed diam eget risus varius blandit sit amet non magna.\n" +
    "\n" +
    "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.";
const post2 = "# Another blog post\n" +
    "\n" +
    "_March 23, 2020 by [Matt](/)_\n" +
    "\n" +
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
    "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\n" +
    "Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\n" +
    "\n" +
    "Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.\n" +
    "Nullam id dolor id nibh ultricies vehicula ut id elit.\n" +
    "\n" +
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\n" +
    "Aenean lacinia bibendum nulla sed consectetur.\n" +
    "\n" +
    "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\n" +
    "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\n" +
    "Morbi leo risus, porta ac consectetur ac, vestibulum at eros.";
const post3 = "# New feature\n" +
    "\n" +
    "_March 14, 2020 by [Tom](/)_\n" +
    "\n" +
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
    "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.\n" +
    "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,\n" +
    "ut fermentum massa justo sit amet risus.\n" +
    "\n" +
    "- Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n" +
    "- Donec id elit non mi porta gravida at eget metus.\n" +
    "- Nulla vitae elit libero, a pharetra augue.\n" +
    "\n" +
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\n" +
    "Aenean lacinia bibendum nulla sed consectetur.\n" +
    "\n" +
    "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.";
const posts = [post1, post2, post3];

const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
        { title: 'August 1999', url: '#' },
        { title: 'July 1999', url: '#' },
        { title: 'June 1999', url: '#' },
        { title: 'May 1999', url: '#' },
        { title: 'April 1999', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'X', icon: XIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Blog" sections={sections} />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                    <Grid container spacing={5} sx={{ mt: 3 }}>
                        <Main title="From the firehose" posts={posts} />
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            social={sidebar.social}
                        />
                    </Grid>
                </main>
            </Container>
            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
        </ThemeProvider>
    );
}