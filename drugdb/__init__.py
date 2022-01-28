from os import path, makedirs

from flask import Flask, redirect, url_for


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True, static_folder='app', static_url_path="/app")
    app.config.from_mapping(
        SECRET_KEY='fb^L5EUu;7r~T&k[kD.y_\tfK&[SeXiU},I[}Q01afflgAsB@',
        DATABASE=path.join(app.instance_path, 'db.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        makedirs(app.instance_path)
    except OSError:
        pass

    from . import db
    db.init_app(app)

    from .api import bp
    app.register_blueprint(bp)

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def catch_all(path):
        return app.send_static_file("index.html")

    return app
