page {
    includeJSLibs {
        bootstrap = https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js
        bootstrap {
            external = 1
            integrity = sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa
        }
    }

    javascriptLibs {
        jQuery = 1
        jQuery {
            version = latest
            source = google
            noConflict = 0
        }

        SVG = 1

        ExtJs = 1
    }

    includeCSS {
        bootstrap = https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
        bootstrap {
            external = 1
            integrity = sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u
        }
    }
}