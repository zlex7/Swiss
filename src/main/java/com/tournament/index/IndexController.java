package com.tournament.index;

import static com.tournament.main.Application.bookDao;
import static com.tournament.main.Application.userDao;

import java.util.HashMap;
import java.util.Map;

import com.tournament.util.Path;
import com.tournament.util.ViewUtil;

import spark.Request;
import spark.Response;
import spark.Route;

public class IndexController {
    public static Route serveIndexPage = (Request request, Response response) -> {
        Map<String, Object> model = new HashMap<>();
        model.put("users", userDao.getAllUserNames());
        model.put("book", bookDao.getRandomBook());
        return ViewUtil.render(request, model, Path.Template.INDEX);
    };
}
